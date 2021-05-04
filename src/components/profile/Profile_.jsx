import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Btn } from "..";
import Controls from "../../components/controls/Controls";
import { useAuth } from "../../context/AuthContext";
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
  const { updateEmail, updatePassword } = useAuth();
  const [{ student, user }, dispatch] = useStateValue();
  const [update, setUpdate] = useState({});
  const [posts, setPosts] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let unsub2;
    if (!student) {
      console.log("! student = ");
      unsub2 = db
        .collection(collections.students)
        .doc(user?.uid)
        .onSnapshot((doc) => {
          dispatch({
            type: actionTypes.SET_STUDENT,
            student: doc.data(),
          });
        });
    }
    return unsub2;
    // return { unsub, unsub2 };
  }, []);

  useEffect(() => {
    console.log("if student posts");
    let unsub = db
      .collection(collections.posts)
      .where("bookPostedById", "==", student?.uid)
      .onSnapshot((query) => {
        const items = [];
        query.forEach((doc) => {
          items.push({ uid: doc.id, ...doc.data() });
        });
        setPosts(items);
      });
    return unsub;
  }, []);

  useEffect(() => {
    console.log("if student books");
    let unsub = db
      .collection(collections.books)
      .where("bookPostedById", "==", student?.uid)
      .onSnapshot((query) => {
        const items = [];
        query.forEach((doc) => {
          items.push({ uid: doc.id, ...doc.data() });
        });
        setBooks(items);
      });
    return unsub;
  }, []);

  const isEmptyObj = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  const handleSetUpdate = () => {
    for (const [key, value] of Object.entries(values)) {
      // console.log(`${key}: ${value}`);

      if (!(values[key] === student[key] || values[key] === "")) {
        console.log(
          `values[key] === student[key] >> ${values[key]} === ${student[key]}`
        );
        // console.log(`update ${key}`);
        let newObj = { [key]: values[key] };
        // console.log("newObj = ", newObj);
        setUpdate((prevState) => ({ ...prevState, ...newObj }));
      }
    }
  };

  const validate2 = (fieldValues = values) => {
    let temp = { ...errors };
    // console.log("temp = ", temp);
    console.log("fieldValues = ", fieldValues);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if ("email" in fieldValues)
      temp.email =
        emailPattern.test(fieldValues.email) || fieldValues.email === ""
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
  let updateDoc = false;

  const handleUpdatePassword = async (password) => {
    console.log("updating password profile");
    try {
      updateDoc = await updatePassword(password);
    } catch (error) {
      console.log("Updating password error ", error.message);
    }
  };

  const handleUpdateEmail = async (email) => {
    console.log("updating email profile");
    try {
      updateDoc = await updateEmail(email);
    } catch (error) {
      console.log("Updating email error ", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("isEmpty1 ", update);
    let x = isEmptyObj(update);
    // console.log("isEmpty2 ", update);
    // console.log("isEmptyObj(update)", x);

    if (validate2() && !isEmptyObj(update)) {
      // console.log("info update ", update);
      // console.log("updates = ", { ...update });

      if (!isEmptyObj(update)) {
        try {
          if (update?.password) {
            handleUpdatePassword(update?.password);
          }

          if (update?.email) {
            handleUpdateEmail(update?.email);
          }

          if (updateDoc) {
            console.log("try update, >> ", update);
            console.log("updateDoc, >> ", updateDoc);

            db.collection(collections.students)
              .doc(student?.uid)
              .update({
                ...update,
              })
              .then(() => {
                console.log("Doc update uid = ", student?.uid);
                setValues(initialFValues2);
              })
              .catch((error) => {
                var errorCode = error?.code;
                var errorMessage = error.message;
                console.error("Error updating document: ", error);
                alert(errorMessage);
              });
          } else {
            console.log("No update doc");
          }
        } catch (error) {
          var errorCode = error?.code;
          var errorMessage = error.message;
          console.log("error handleSubmit = ", error);
          alert(errorMessage);
        }
      }
      setValues(initialFValues2);
    } else {
      console.log("No updates");
      // console.log("update = ", update);
    }
  };

  const handleClick = ({ post }) => {
    try {
      let postsRef = db.collection(collections.posts).doc(post?.uid);
      let booksUID;
      books.forEach((doc) => {
        if (
          doc.title === post?.title &&
          doc.isbn === post?.isbn &&
          doc.bookImg === post?.bookImg
        ) {
          // console.log("doc.uid =", doc.uid);
          booksUID = doc.uid;
        }
      });

      postsRef
        .delete()
        .then(() => {
          console.log("Document successfully from posts deleted!");
        })
        .catch((error) => {
          console.error("Error removing document from posts: ", error);
        });
      // console.log("post = ", post)
      // console.log("postsRef = ", postsRef)

      if (booksUID) {
        console.log("booksUID");
        let booksRef = db.collection(collections.books).doc(booksUID);
        booksRef
          .delete()
          .then(() => {
            console.log("Document successfully from books deleted!");
          })
          .catch((error) => {
            console.error("Error removing document from books: ", error);
          });
      }
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

        <Posts
          posts={posts}
          books={books}
          classes={classes}
          handleClick={handleClick}
        />
      </S.Container>
    </div>
  );
}
