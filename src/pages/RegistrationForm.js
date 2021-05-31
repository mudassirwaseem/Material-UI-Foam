import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import PORTRAITLOGO from "./../images/portrait_logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    height: "70%",
    margin: "0 auto",
  },
  rootTextField: {
    "& > *": {
      margin: theme.spacing(2),
      width: "90%",
    },
  },
  mediumRootTextField: {
    "& > *": {
      margin: theme.spacing(2),
      width: "80%",

      "@media screen and (max-width: 600px)": {
        "&": {
          width: "90%",
        },
      },
    },
  },
  rootSelectField: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "90%",
    },
  },
  rootButton: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  mediumRootSelectField: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "80%",

      "@media screen and (max-width: 600px)": {
        "&": {
          width: "90%",
        },
      },
    },
  },
  smallRootSelectField: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30%",

      "@media screen and (max-width: 600px)": {
        "&": {
          width: "40%",
        },
      },
    },
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  textField: {
    margin: theme.spacing(2),
    width: "80%",

    "@media screen and (max-width: 600px)": {
      "&": {
        width: "90%",
      },
    },
  },
  invalidFeedback: {
    margin: "-10px 50px 0",
    textAlign: "left",
    color: "#f00",
    fontSize: "14px",
  },
  container: {
    margin: "120px auto",
  },
  paper: {
    padding: "40px 20px",
    textAlign: "center",
    borderRadius: "20px",
  },
  image: {
    height: "200px",
  },
  success: {
    padding: "10px 60px",
    margin: "40px 0",
    color: "#fff",
    backgroundColor: "#006864",
    border: "2px solid transparent",
    "&:hover": {
      border: "2px solid #006864",
      backgroundColor: "#fff",
      color: "#006864",
    },
  },
}));

const batches = [
  {
    value: "batch 1",
    label: "Batch 1",
  },
  {
    value: "batch 2",
    label: "Batch 2",
  },
  {
    value: "batch 3",
    label: "Batch 3",
  },
];

const courses = [
  {
    value: "Web & Mobile",
    label: "Web And Mobile",
  },
  {
    value: "Graphic Designing",
    label: "Graphic Designing",
  },
];

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const qualifications = [
  {
    value: "Matric",
    label: "Matric",
  },
  {
    value: "Intermediate",
    label: "Intermediate",
  },
  {
    value: "Graduate",
    label: "Graduate",
  },
  {
    value: "Undergraduate",
    label: "Undergraduate",
  },
  {
    value: "None",
    label: "None",
  },
];

const timings = [
  {
    value: "9 - 11 AM",
    label: "9 - 11 AM",
  },
  {
    value: "11 AM - 1 PM",
    label: "11 AM - 1 PM",
  },
  {
    value: "1 - 3 PM",
    label: "1 - 3 PM",
  },
  {
    value: "5 - 7 PM",
    label: "5 - 7 PM",
  },
  {
    value: "7 - 9 PM",
    label: "7 - 9 PM",
  },
];

const RegistrationForm = () => {
  const classes = useStyles();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);

    history.replace({
      pathname: "/thanks",
      state: { detail: data },
    });
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Paper component="div" elevation={7} className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <img
                src={PORTRAITLOGO}
                alt="Portrait"
                className={classes.image}
              />
            </Grid>
          </Grid>
          <form autoComplete="off">
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootSelectField}>
                  <TextField
                    select
                    className={classNames({ "is-invalid": errors.cou })}
                    label="Courses"
                    SelectProps={{
                      native: true,
                    }}
                    {...register("cou", {
                      required: "this field is required",
                    })}
                  >
                    <option>Select Course</option>
                    {courses.map((course) => (
                      <option key={course.value} value={course.value}>
                        {course.label}
                      </option>
                    ))}
                  </TextField>
                  {errors.cou && (
                    <div className={classes.invalidFeedback}>
                      {errors.cou.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootSelectField}>
                  <TextField
                    select
                    className={classNames({ "is-invalid": errors.bat })}
                    label="Batches"
                    SelectProps={{
                      native: true,
                    }}
                    {...register("bat", {
                      required: "this field is required",
                    })}
                  >
                    <option>Select Batch</option>
                    {batches.map((batch) => (
                      <option key={batch.value} value={batch.value}>
                        {batch.label}
                      </option>
                    ))}
                  </TextField>
                  {errors.bat && (
                    <div className={classes.invalidFeedback}>
                      {errors.bat.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    className={classNames({ "is-invalid": errors.fullname })}
                    {...register("fullname", {
                      required: "this field is required",
                      minLength: {
                        value: 4,
                        message: "Please enter at least 4 characters",
                      },
                    })}
                  />
                  {errors.fullname && (
                    <div className={classes.invalidFeedback}>
                      {errors.fullname.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Father Name"
                    className={classNames({ "is-invalid": errors.fathername })}
                    {...register("fathername", {
                      required: "this field is required",
                      minLength: {
                        value: 4,
                        message: "Please enter at least 4 characters",
                      },
                    })}
                  />
                  {errors.fathername && (
                    <div className={classes.invalidFeedback}>
                      {errors.fathername.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box className={classes.dateContainer}>
                  <TextField
                    className={classNames(`${classes.textField}`, {
                      "is-invalid": errors.date,
                    })}
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("date", {
                      required: "this field is required",
                    })}
                  />
                  {errors.date && (
                    <div className={classes.invalidFeedback}>
                      {errors.date.message}
                    </div>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootSelectField}>
                  <TextField
                    select
                    className={classNames({ "is-invalid": errors.gend })}
                    label="Gender"
                    SelectProps={{
                      native: true,
                    }}
                    {...register("gend", {
                      required: "this field is required",
                    })}
                  >
                    <option>Select Gender</option>
                    {genders.map((gender) => (
                      <option key={gender.value} value={gender.value}>
                        {gender.label}
                      </option>
                    ))}
                  </TextField>
                  {errors.gend && (
                    <div className={classes.invalidFeedback}>
                      {errors.gend.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Permanent Address"
                    multiline
                    rows="1"
                    helperText="Maximum 100 characters"
                    className={classNames({ "is-invalid": errors.address })}
                    {...register("address", {
                      required: "this field is required",
                      minLength: {
                        value: 10,
                        message: "Please enter at least 10 characters",
                      },
                      maxLength: {
                        value: 100,
                        message: "Please enter maximum 100 characters",
                      },
                    })}
                  />
                  {errors.address && (
                    <div className={classes.invalidFeedback}>
                      {errors.address.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    type="email"
                    className={classNames({ "is-invalid": errors.email })}
                    {...register("email", {
                      required: "this field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please enter a valid e-mail address",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className={classes.invalidFeedback}>
                      {errors.email.message}
                    </div>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="CNIC"
                    type="number"
                    helperText="e.g. 4210122222222"
                    className={classNames({ "is-invalid": errors.cnic })}
                    {...register("cnic", {
                      required: "this field is required",
                      minLength: {
                        value: 13,
                        message: "Please enter 13 characters",
                      },
                      maxLength: {
                        value: 13,
                        message: "Please enter maximum 13 characters",
                      },
                    })}
                  />
                  {errors.cnic && (
                    <div className={classes.invalidFeedback}>
                      {errors.cnic.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    type="number"
                    helperText="921111111111"
                    className={classNames({ "is-invalid": errors.phone })}
                    {...register("phone", {
                      required: "this field is required",
                      pattern: {
                        value: /^\d{12}$/,
                        message: "Please enter a valid 12-digit phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <div className={classes.invalidFeedback}>
                      {errors.phone.message}
                    </div>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootTextField}>
                  <TextField
                    id="outlined-basic"
                    label="Parents / Guardian Number"
                    type="number"
                    helperText="921111111111"
                    className={classNames({ "is-invalid": errors.guardianno })}
                    {...register("guardianno", {
                      required: "this field is required",
                      pattern: {
                        value: /^\d{12}$/,
                        message: "Please enter a valid 12-digit phone number",
                      },
                    })}
                  />
                  {errors.guardianno && (
                    <div className={classes.invalidFeedback}>
                      {errors.guardianno.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootSelectField}>
                  <TextField
                    select
                    className={classNames({ "is-invalid": errors.qualif })}
                    label="Qualification"
                    SelectProps={{
                      native: true,
                    }}
                    {...register("qualif", {
                      required: "this field is required",
                    })}
                  >
                    <option>Select Qualification</option>
                    {qualifications.map((qualification) => (
                      <option
                        key={qualification.value}
                        value={qualification.value}
                      >
                        {qualification.label}
                      </option>
                    ))}
                  </TextField>
                  {errors.qualif && (
                    <div className={classes.invalidFeedback}>
                      {errors.qualif.message}
                    </div>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.mediumRootSelectField}>
                  <TextField
                    select
                    className={classNames({ "is-invalid": errors.time })}
                    label="Timings"
                    SelectProps={{
                      native: true,
                    }}
                    {...register("time", {
                      required: "this field is required",
                    })}
                  >
                    <option>Select Timing</option>
                    {timings.map((timing) => (
                      <option key={timing.value} value={timing.value}>
                        {timing.label}
                      </option>
                    ))}
                  </TextField>
                  {errors.time && (
                    <div className={classes.invalidFeedback}>
                      {errors.time.message}
                    </div>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box className={classes.rootButton}>
                  <Button
                    variant="outlined"
                    size="large"
                    type="submit"
                    className={classes.success}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegistrationForm;
