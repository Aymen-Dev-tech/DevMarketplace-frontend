import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
type FormValues = {
  phoneNumber: string;
  role: string;
};

export default function Signup() {
  //form state
  const form = useForm<FormValues>({
    defaultValues: {
      phoneNumber: "",
      role: "",
    },
  });
  // destructor register function
  const { register, handleSubmit, formState, control } = form;
  //mange form submittion
  const onSubmit = async (data: FormValues) => {
    console.log(data);
    window.open(
      `/api/auth/google?info[phoneNumber]=${data.phoneNumber}&info[role]=${data.role}`,
      "_self"
    );
  };
  //validation
  const { errors } = formState;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl error={!!errors.role}>
          <FormLabel id="demo-row-radio-buttons-group-label">Account</FormLabel>
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
            <FormLabel>Phone Number</FormLabel>
            <TextField
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
            <Button type="submit">Submit</Button>
          </Stack>
        </FormControl>
      </form>
    </>
  );
}
