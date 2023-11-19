import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { userLogin } from "@/lib/firebase";
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
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn(props) {
  const router = useRouter();
  const [user, setUser] = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      router.push("/chats");
    }
  }, [user, router]);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailCheck, setEmailCheck] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const allValidator = (type, func, event) => {
    let ele = event.currentTarget;
    let regex = null;
    switch (type) {
      case "password":
        regex = /^(?!\s*$).+/;
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
    setLoginError(false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const allData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    let stop = false;
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
      const uid = await userLogin(allData.email, allData.password);
      if (uid instanceof Error) {
        throw uid;
      }
      setUser(uid);
      router.push("/chats");
    } catch (error) {
      if (
        error.message == "Firebase: Error (auth/invalid-login-credentials)."
      ) {
        setLoginError("Invalid login credentials");
      } else {
        setLoginError("Login failed due to some error!");
      }
    }
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs" className="bg-white rounded p-4">
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
          Sign in
        </Typography>
        {loginError ? (
          <Alert severity="error" className="w-full justify-center mt-2">
            {loginError}
          </Alert>
        ) : null}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={(event) => {
              allValidator("email", setEmailCheck, event);
            }}
            helperText={emailCheck ? "Please enter a valid email" : " "}
            error={emailCheck}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => {
              allValidator("password", setPassCheck, event);
            }}
            helperText={passCheck ? "Cannot be empty" : ""}
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
          <FormControlLabel
            control={<Checkbox value={0} color="primary" />}
            label="Remember me"
          />
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            className="bg-blue-700 hover:bg-blue-500"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link className="no-underline" href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                <button
                  onClick={() => {
                    props.onclick(true);
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
