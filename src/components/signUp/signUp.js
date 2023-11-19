import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { userRegister } from "@/lib/firebase";
import { AuthContext } from "@/lib/authContext";
import { useRouter } from "next/navigation";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function SignUp(props) {
  const router = useRouter();
  const [user, setUser] = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      router.push("/chats");
    }
  }, [user, router]);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [text1Check, setText1Check] = useState(false);
  const [text2Check, setText2Check] = useState(false);
  const [regError, setRegError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const allValidator = (type, func, event) => {
    let ele = event.currentTarget;
    let regex = null;
    switch (type) {
      case "password":
        regex = /^(?=.*[0-9])(?=.*[a-z]).{8,20}$/;
        break;
      case "email":
        regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      default:
        regex = /^(?=.*[a-z]).{3,}$/;
        break;
    }
    if (!regex.test(ele.value)) {
      func(true);
      return;
    }
    func(false);
  };

  const handleSubmit = async (event) => {
    setRegError(false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const allData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    let stop = false;
    if (!allData.firstName) {
      setText1Check(true);
      stop = true;
    }
    if (!allData.lastName) {
      setText2Check(true);
      stop = true;
    }
    if (!allData.email) {
      setEmailCheck(true);
      stop = true;
    }
    if (!allData.password) {
      setPassCheck(true);
      stop = true;
    }
    if (stop) {
      return null;
    }
    setLoading(true);

    // After Validation
    try {
      const uid = await userRegister(
        allData.firstName,
        allData.lastName,
        allData.email,
        allData.password
      );
      if (uid instanceof Error) {
        throw uid;
      }
      setUser(uid);
      router.push("/chats");
    } catch (error) {
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        setRegError("This email is registered with another account!");
      } else {
        setRegError("Registeration failed due to some error!");
      }
    }
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs" className="bg-white rounded py-4">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {regError ? (
          <Alert severity="error" className="w-full justify-center mt-2">
            {regError}
          </Alert>
        ) : null}
        <Box
          component="form"
          id="form"
          name="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(event) => {
                  allValidator("text", setText1Check, event);
                }}
                helperText={text1Check ? "min 3 characters" : " "}
                error={text1Check}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(event) => {
                  allValidator("text", setText2Check, event);
                }}
                helperText={text2Check ? "min 3 characters" : " "}
                error={text2Check}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => {
                  allValidator("email", setEmailCheck, event);
                }}
                helperText={emailCheck ? "Please enter a valid email" : " "}
                error={emailCheck}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="new-password"
                type={showPassword ? "text" : "password"}
                onChange={(event) => {
                  allValidator("password", setPassCheck, event);
                }}
                helperText={
                  passCheck
                    ? `Password must have atleast
                  length(8-20), 1 letter and 1 number`
                    : " "
                }
                error={passCheck}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            className="bg-blue-700 hover:bg-blue-500"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                <button
                  onClick={() => {
                    props.onclick(false);
                  }}
                >
                  Already have an account? Sign in
                </button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
