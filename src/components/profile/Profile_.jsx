import {
  ButtonBase,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "./useForm_";
import * as S from "./Profile_styles";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { useStateValue } from "../../context/StateProvider";
import { Btn } from "..";
import ROUTES from "../../pages";
import { btnColor } from "../button/LinkBtnData";
import { collections, db } from "../../database";
import { ContactSupportOutlined } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import ProfileBanner from "./profileBanner/ProfileBanner";
import { useProfileData } from "./profile_Data";
// import { sections } from "./profile_Data";

const initialFValues2 = {
  displayName: "",
  university: "",
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
};

const useStyles = makeStyles((theme) => ({
  root: {},
  inputBorder: {
    "& .MuiInputBase-root": {
      borderRadius: "100px",
    },
  },
  paperStyle1: {
    padding: theme.spacing(7),
    flex: "4",
  },
  paperStyle2: {
    flex: "1",
    marginLeft: "1em",
    padding: "2em 1em",
  },
  header: {
    marginBottom: "1.2em",
  },
  btnText: {
    padding: "0",
    margin: "0",
    textAlign: "start",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    marginBottom: "1.5em",
  },
  scroll: {
    overflow: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    scrollBehavior: "smooth",
    " &::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

export default function Profile_() {
  const classes = useStyles();
  const [{ student }, dispatch] = useStateValue();
  const [update, setUpdate] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsub = db.collection(collections.posts).onSnapshot((doc) => {
      getPosts();
    });
    return unsub;
  }, []);

  const getPosts = async () => {
    let res = db
      .collection(collections.posts)
      .where("bookPostedById", "==", "6lJts64PZtfiT5zISVftTYw5rNt2");
    let data = await res.get();
    let userPosts = [];
    data.docs.forEach((doc) => {
      let obj = { uid: doc.id, ...doc.data() };
      userPosts.push(obj);
    });
    console.log("just fetched data from FireBase");
    setPosts(userPosts);
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    console.log("temp = ", temp);
    console.log("fieldValues = ", fieldValues);

    if ("email" in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) || fieldValues.email === ""
          ? ""
          : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 || fieldValues.mobile === ""
          ? ""
          : "Minimum 10 numbers required.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 7 || fieldValues.password === ""
          ? ""
          : "Minimum 8 numbers required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    // resetForm,
  } = useForm(initialFValues2, true, validate2);

  const { sections } = useProfileData(
    classes,
    values,
    handleInputChange,
    errors,
    student
  );

  const handleUpdate = () => {
    if (update) {
      try {
        console.log("try update, >> ", update);

        db.collection(collections.students)
          .doc(student.uid)
          .update({
            ...update,
          })
          .then(() => {
            console.log("Doc update uid = ", student.uid);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      } catch (error) {
        console.log("error = ", error);
      }
    }
    console.log("out of if");
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (validate2()) {
      console.log("values >> ", values);

      if (
        !(values.displayName === student.username || values.displayName === "")
      ) {
        console.log("update displayName");
        let newObj = { username: values.displayName };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (
        !(values.university === student.university || values.university === "")
      ) {
        console.log("update university");
        let newObj = { university: values.university };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (
        !(values.firstName === student.firstName || values.firstName === "")
      ) {
        console.log("update firstName");
        let newObj = { firstName: values.firstName };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (!(values.lastName === student.lastName || values.lastName === "")) {
        console.log("update lastName");
        let newObj = { lastName: values.lastName };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (!(values.email === student.email || values.email === "")) {
        console.log("update email");
        let newObj = { email: values.email };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (!(values.mobile === student.phoneNumber || values.mobile === "")) {
        console.log("update phoneNumber");
        let newObj = { phoneNumber: values.mobile };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
      if (!(values.password === student.password || values.password === "")) {
        console.log("update password");
        let newObj = { password: values.password };
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }

      handleUpdate();
    }
  };

  const rowOne = [
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "Display Name",
      name: "displayName",
      value: values.displayName,
      onChange: handleInputChange,
      error: errors.displayName,
      placeholder: student?.username !== "" ? student?.username : "username",
    },
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "University",
      name: "university",
      value: values.university,
      onChange: handleInputChange,
      error: errors.university,
      placeholder:
        student?.university !== "" ? student?.university : "university",
    },
  ];

  const rowTwo = [
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "First Name",
      name: "firstName",
      value: values.firstName,
      onChange: handleInputChange,
      error: errors.firstName,
      placeholder:
        student?.firstName !== "" ? student?.firstName : "first name",
    },
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "Last Name",
      name: "lastName",
      value: values.lastName,
      onChange: handleInputChange,
      error: errors.lastName,
      placeholder: student?.lastName !== "" ? student?.lastName : "last name",
    },
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "Email",
      name: "email",
      value: values.email,
      onChange: handleInputChange,
      error: errors.email,
      placeholder: student?.email !== "" ? student?.email : "email@example.com",
    },
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "Phone Number",
      name: "mobile",
      value: values.mobile,
      onChange: handleInputChange,
      error: errors.mobile,
      placeholder:
        student?.phoneNumber !== "" ? student?.phoneNumber : "2435558888",
    },
  ];

  const rowThree = [
    {
      className: classes.inputBorder,
      variant: "outlined",
      label: "Password",
      name: "password",
      value: values.password,
      onChange: handleInputChange,
      error: errors.password,
    },
    // {
    //   className: classes.inputBorder,
    //   variant: "outlined",
    //   label: "Confirm Password",
    //   name: "confirmPassword",
    //   value: values.confirmPassword,
    //   onChange: handleInputChange,
    //   error: errors.confirmPassword,
    // },
  ];

  const rows = [...rowOne, ...rowTwo, ...rowThree];

  const handleClick = (props) => {
    try {
      db.collection(collections.posts)
        .doc(props)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      console.log("book to be deleted = ", props);
    } catch (error) {
      console.log("error = ", error);
    }
  };

  return (
    <div>
      {/* {console.log("rows = ", rows)} */}
      {/* <ProfileBanner /> */}
      <S.Container>
        <Paper className={classes.paperStyle1}>
          <Form onSubmit={handleSubmit}>
            <Grid container>
              {sections.map((item, key) => (
                <React.Fragment key={key}>
                  {console.log("item =", item)}
                  <Grid item xs={4}>
                    <h1>
                      <span>
                        {item?.title} {item?.icon}
                      </span>
                    </h1>
                    <p>{item?.description}</p>
                  </Grid>

                  <Grid container item xs={8}>
                    {item?.inputs?.map((element, key) => {
                      return (
                        <Grid key={key} item xs={element?.xs}>
                          <Controls.Input
                            className={element?.className}
                            variant={element?.variant}
                            label={element?.label}
                            name={element?.name}
                            value={element?.value}
                            onChange={element?.onChange}
                            error={element?.error}
                            placeholder={element?.placeholder}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        // console.log("element =", element)
                      );
                    })}
                  </Grid>
                  <S.Divider />
                </React.Fragment>
              ))}

              {/* <Grid item xs={4}>
                <h1>
                  <span>Personal Details 🎭</span>
                </h1>
                <p>
                  Your user profile information will be shown to other users.
                </p>
              </Grid>

              <Grid container item xs={8}>
                {rowTwo.map((element, key) => (
                  <Grid key={key} item xs={6}>
                    <Controls.Input
                      className={element?.className}
                      variant={element?.variant}
                      label={element?.label}
                      name={element?.name}
                      value={element?.value}
                      onChange={element?.onChange}
                      error={element?.error}
                      placeholder={element?.placeholder}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <S.Divider />

              <Grid item xs={4}>
                <h1>
                  <span>Password 🔑</span>
                </h1>
                <p>
                  Your user profile information will be shown to other users.
                </p>
              </Grid>

              <Grid container item xs={8}>
                {rowThree.map((element, key) => (
                  <Grid key={key} item xs={12}>
                    <Controls.Input
                      type="password"
                      className={element?.className}
                      variant={element?.variant}
                      label={element?.label}
                      name={element?.name}
                      value={element?.value}
                      onChange={element?.onChange}
                      error={element?.error}
                    />
                  </Grid>
                ))}
              </Grid>
              <S.Divider />

              <Grid container item spacing={3} justify="center">
                <Grid item>
                  <Btn type="Submit" {...btnColor.primary}>
                    Save changes
                  </Btn>
                </Grid>
              </Grid> */}
            </Grid>
          </Form>
        </Paper>

        <Paper className={`${classes.paperStyle2} ${classes.scroll}`}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <h2 className={classes.header}>Your Post</h2>
            </Grid>

            {posts &&
              posts.map((element, key) => (
                <div key={key}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <ButtonBase
                      className={classes.btnText}
                      onClick={() => handleClick(element?.uid)}
                    >
                      <Grid item>
                        <DeleteIcon />
                      </Grid>
                    </ButtonBase>
                    <Grid item>
                      <p style={{ fontSize: "12px" }}>{element?.uid} dfddddd</p>
                    </Grid>
                  </Grid>
                  <hr
                    style={{
                      background: "linear-gradient(0deg, #303030, #303030)",
                      opacity: "0.2",
                      width: "100%",
                      margin: "1em 0",
                    }}
                  />
                </div>
              ))}
          </Grid>
        </Paper>
      </S.Container>
    </div>
  );
}
