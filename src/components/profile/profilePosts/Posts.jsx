import { ButtonBase, Grid, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

export default function Posts({ posts, classes, handleClick }) {
  return (
    <>
      <Paper className={`${classes.paperStyle2} ${classes.scroll}`}>
        <Grid container direction="column" alignContent="center">
          <Grid item>
            <h2 className={classes.header}>Your Post</h2>
          </Grid>
          {posts && posts.map((element, key) => (
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
                  <p style={{ fontSize: "12px" }}>{element?.title || "Book Title"}</p>
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
    </>
  );
}
