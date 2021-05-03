import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Btn } from "..";
import Controls from "../../components/controls/Controls";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { collections, db } from "../../database";
import Posts from "./profilePosts/Posts";
import { useProfileData } from "./profile_Data";
import * as S from "./Profile_styles";
import Spinner from "./Spinner";
import { Form, useForm } from "./useForm_";

const initialFValues2 = {
  username: "",
  university: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
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
    textAlign: "center",
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
  const [{ student, user }, dispatch] = useStateValue();
  const [update, setUpdate] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsub = db.collection(collections.posts).onSnapshot((doc) => {
      getPosts();
    });

    let unsub2 = db
      .collection(collections.students)
      .doc(user?.uid)
      .onSnapshot((doc) => {
        dispatch({
          type: actionTypes.SET_STUDENT,
          student: doc.data(),
        });
      });
    return { unsub, unsub2 };
  }, []);

  const getPosts = async () => {
    // let id = '6lJts64PZtfiT5zISVftTYw5rNt2'
    let res = db
      .collection("Post")
      .where("bookPostedById", "==", student.uid);
    let data = await res.get();
    let userPosts = [];
    data.docs.forEach((doc) => {
      let obj = { uid: doc.id, ...doc.data() };
      userPosts.push(obj);
    });
    console.log("just fetched data from FireBase");
    setPosts(userPosts);
  };

  const isEmptyObj = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  const handleSetUpdate = () => {
    for (const [key, value] of Object.entries(values)) {
      // console.log(`${key}: ${value}`);

      if (!(values[key] === student[key] || values[key] === "")) {
        console.log(`update ${key}`);
        let newObj = { [key]: values[key] };
        console.log("newObj = ", newObj);
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
    }
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    // console.log("temp = ", temp);
    console.log("fieldValues = ", fieldValues);

    if ("email" in fieldValues)
      temp.email =
        /$^|.+@.+..+/.test(fieldValues.email) || fieldValues.email === ""
          ? ""
          : "Email is not valid.";
    if ("phoneNumber" in fieldValues)
      temp.phoneNumber =
        fieldValues.phoneNumber.length > 9 || fieldValues.phoneNumber === ""
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

  const { sections, buttonSection } = useProfileData(
    classes,
    values,
    handleInputChange,
    errors,
    student
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("isEmpty1 ", update);
    let x = isEmptyObj(update);
    console.log("isEmpty2 ", update);
    console.log("isEmptyObj(update)", x);

    if (validate2() && !isEmptyObj(update)) {
      console.log("info update ", update);
      console.log("updates = ", { ...update });

      if (!isEmptyObj(update)) {
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
            .then(() => {
              setValues(initialFValues2);
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        } catch (error) {
          console.log("error = ", error);
        }
      }
      setValues(initialFValues2);
    } else {
      console.log("No updates");
      console.log("update = ", update);
    }
  };

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
      <S.Container>
        <Paper className={classes.paperStyle1}>
          <Form onSubmit={handleSubmit}>
            <Grid container>
              {sections.map((item, key) => (
                <React.Fragment key={key}>
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
                            type={element?.type}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                  <S.Divider />

                  {item?.beforeBtn && (
                    <React.Fragment>
                      <Grid container item justify="center">
                        <Btn
                          type={buttonSection?.type}
                          {...buttonSection?.color}
                          onClick={() => handleSetUpdate()}
                        >
                          {buttonSection?.text}
                        </Btn>
                      </Grid>
                    </React.Fragment>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Form>
        </Paper>

        <Posts posts={posts} classes={classes} handleClick={handleClick} />
      </S.Container>
    </div>
  );
}
