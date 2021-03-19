import React, { useState } from 'react';
import * as S from './SellBookFormStyle';

export const SellBookForm = () => {
  const [warning, setWarn] = useState(false);
  const [inputs, setInput] = useState({
    title: '',
    author: '',
    ispn: '',
    edition: '',
    publisher: '',
    department: '',
    courseUsedIn: '',
  });
  const title = inputs.title;
  const author = inputs.author;
  const ispn = inputs.ispn;
  const edition = inputs.edition;
  const publisher = inputs.publisher;
  const department = inputs.department;
  const courseUsedIn = inputs.courseUsedIn;

  const changeTitle = (e) => {
    setInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const changeAuthor = (e) => {
    setInput((prevState) => {
      return { ...prevState, author: e.target.value };
    });
  };
  const changeISPN = (e) => {
    setInput((prevState) => {
      return { ...prevState, ispn: e.target.value };
    });
  };

  const changeEdition = (e) => {
    setInput((prevState) => {
      return { ...prevState, edition: e.target.value };
    });
  };
  const changePublisher = (e) => {
    setInput((prevState) => {
      return { ...prevState, publisher: e.target.value };
    });
  };
  const changeDepartment = (e) => {
    setInput((prevState) => {
      return { ...prevState, department: e.target.value };
    });
  };
  const changeCourseUsedIn = (e) => {
    setInput((prevState) => {
      return { ...prevState, courseUsedIn: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      title &&
      author &&
      ispn &&
      edition &&
      publisher &&
      department &&
      courseUsedIn
    ) {
      console.log('filled out');
      return;
    }
    console.log('failed');

    setWarn((prewarn) => (prewarn = !prewarn));

    setTimeout(() => {
      setWarn((prewarn) => (prewarn = !prewarn));
    }, 4000);
  };

  return (
    <S.Container>
      {warning === true ? (
        <S.WarningDiv>
          Make Sure All Fields Are Filled Out and In Correct Format
        </S.WarningDiv>
      ) : (
        <S.WarningDiv style={{ opacity: 0 }}>
          Make Sure All Fields Are Filled Out and In Correct Format
        </S.WarningDiv>
      )}
      <S.Header id="form-container">Sell Books</S.Header>
      <S.Form method="POST" onSubmit={(e) => onSubmit(e)}>
        <S.Label for="title">Book Title</S.Label>
        <S.Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={changeTitle}
          placeholder="Intro to Algorithms"
        ></S.Input>
        <S.Label for="author">Author</S.Label>
        <S.Input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={changeAuthor}
          placeholder="Thomas Cormen"
        ></S.Input>
        <S.Label for="ispn">ISPN</S.Label>
        <S.Input
          type="number"
          id="ispn"
          name="ispn"
          value={ispn}
          onChange={changeISPN}
          placeholder="9780140274059"
        ></S.Input>
        <S.Label for="edition">Edition</S.Label>
        <S.Input
          type="number"
          id="edition"
          name="edition"
          value={edition}
          onChange={changeEdition}
          placeholder="3"
        ></S.Input>
        <S.Label for="publisher">Publisher</S.Label>
        <S.Input
          type="text"
          id="publisher"
          name="publisher"
          value={publisher}
          onChange={changePublisher}
          placeholder="MIT Press"
        ></S.Input>
        <S.Label for="department">Department</S.Label>
        <S.Input
          type="text"
          id="department"
          name="department"
          value={department}
          onChange={changeDepartment}
          placeholder="Computer"
        ></S.Input>
        <S.Label for="courseUsedIn">Course Used In</S.Label>
        <S.Input
          type="text"
          id="courseUsedIn"
          name="courseused"
          value={courseUsedIn}
          onChange={changeCourseUsedIn}
          placeholder="COSC 336"
        ></S.Input>
        <S.Label for="book-img">Choose Image of Book</S.Label>
        <S.InputFile type="file" accept="image/png, image/jpeg"></S.InputFile>
        <S.PostButton type="submit">Post Book</S.PostButton>
      </S.Form>
    </S.Container>
  );
};