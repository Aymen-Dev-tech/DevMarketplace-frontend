import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Link,
  Radio,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
type FormValues = {
  exp: string;
  phoneNumber: string;
  role: string;
};

export default function Signup() {
  const { auth } = useAuth();
  //form state
  const form = useForm<FormValues>({
    defaultValues: {
      exp: "",
      phoneNumber: "",
      role: "",
    },
  });
  // destructor register function
  const { register, unregister, handleSubmit, formState, control, watch } =
    form;
  const watchRole = watch("role");
  //mange form submittion
  useEffect(() => {
    if (watchRole === "seller") {
      register("exp");
    } else {
      unregister("exp");
    }
  }, [register, unregister, watchRole]);
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    if (watchRole === "seller") {
      window.open(
        `/api/auth/google?info[phoneNumber]=${data.phoneNumber}&info[role]=${data.role}&info[exp]=${data.exp}`,
        "_self"
      );
    } else {
      window.open(
        `/api/auth/google?info[phoneNumber]=${data.phoneNumber}&info[role]=${data.role}`,
        "_self"
      );
    }
  };
  //validation
  const { errors } = formState;
  if (auth.name === "") {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "300px",
        }}
      >
        <Box>
          <img alt="healt" src="/illustrations/Health.svg" />
        </Box>

        <Box
          sx={{
            width: "550px",
            height: "600px",
            boxSizing: "border-box",
            boxShadow: "0px 1.19787px 4.7915px rgba(0, 0, 0, 0.25)",
            borderRadius: "23.9575px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#FFFFFF",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "32px",
                lineHeight: "39px",
                marginBottom: "0.5rem",
                alignSelf: "flex-start",
              }}
            >
              Sign Up
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#5B5B5B",
                marginBottom: "3rem",
              }}
            >
              Start your journey now!
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl error={!!errors.role}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Account
                </FormLabel>
                <Controller
                  rules={{ required: "Account type required" }}
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      {...field}
                    >
                      <FormControlLabel
                        value="seller"
                        control={<Radio />}
                        label="Seller"
                      />
                      <FormControlLabel
                        value="buyer"
                        control={<Radio />}
                        label="Buyer"
                      />
                    </RadioGroup>
                  )}
                />
                {errors.role?.message && (
                  <FormHelperText>{errors.role?.message}</FormHelperText>
                )}

                <Stack direction={"column"} spacing={2}>
                  {watchRole === "seller" && (
                    <>
                      <FormLabel> Experience </FormLabel>
                      <TextField
                        sx={{ width: "350px" }}
                        error={!!errors.exp}
                        helperText={errors.exp?.message}
                        type="text"
                        placeholder="E.g., Software Developer"
                        {...register("exp", {
                          required: "exp required",
                          pattern: {
                            value: /^[a-zA-Z\s]+$/,
                            message: "Invalid inpute",
                          },
                        })}
                      />
                    </>
                  )}
                  <FormLabel>Phone Number</FormLabel>
                  <TextField
                    sx={{ width: "350px" }}
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    type="tel"
                    placeholder="phone"
                    {...register("phoneNumber", {
                      required: "Phone is required",
                      minLength: {
                        value: 10,
                        message: "Phone number must have at least 10 digits",
                      },
                    })}
                  />
                  <Button
                    sx={{ height: "40px", borderRadius: "10px" }}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Stack>
              </FormControl>
            </form>

            <Typography sx={{ marginTop: "1rem", color: "#5B5B5B" }}>
              Already have an account?{" "}
              <Link underline="none" href="/login">
                {" "}
                Login{" "}
              </Link>
            </Typography>
          </Box>
        </Box>
          <img
            style={{ zIndex: -1, marginBottom: "30px", marginLeft: "-950px" }}
            alt="shape-top"
            src="/illustrations/bg-shape.svg"
          />
        
      </Box>
    );
  }
  return <Navigate to="/marketplace" replace={true} />;
}
