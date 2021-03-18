import React, { useState } from 'react';
import * as S from './SellBookFormStyle';

export const SellBookForm = () => {
  const [warning, setWarn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let ispn = document.getElementById('ispn');
    let edition = document.getElementById('edition');
    let publisher = document.getElementById('publisher');
    let department = document.getElementById('department');
    let courseUsedIn = document.getElementById('courseUsedIn').value;

    if (
      title.value ||
      author.value ||
      ispn.value ||
      edition.value ||
      publisher.value ||
      department.value ||
      courseUsedIn.value
    ) {
      console.log('filled out');
      title.value = '';
      author.value = '';
      ispn.value = '';
      edition.value = '';
      publisher.value = '';
      department.value = '';
      courseUsedIn.value = '';
      return;
    }

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
          placeholder="Intro to Algorithms"
        ></S.Input>
        <S.Label for="author">Author</S.Label>
        <S.Input
          type="text"
          id="author"
          name="author"
          placeholder="Thomas Cormen"
        ></S.Input>
        <S.Label for="ispn">ISPN</S.Label>
        <S.Input
          type="number"
          id="ispn"
          name="ispn"
          placeholder="9780140274059"
        ></S.Input>
        <S.Label for="edition">Edition</S.Label>
        <S.Input
          type="number"
          id="edition"
          name="edition"
          placeholder="3"
        ></S.Input>
        <S.Label for="publisher">Publisher</S.Label>
        <S.Input
          type="text"
          id="publisher"
          name="publisher"
          placeholder="MIT Press"
        ></S.Input>
        <S.Label for="department">Department</S.Label>
        <S.Input
          type="text"
          id="department"
          name="department"
          placeholder="Computer"
        ></S.Input>
        <S.Label for="course">Course Used In</S.Label>
        <S.Input
          type="text"
          id="courseUsedIn"
          name="courseused"
          placeholder="COSC 336"
        ></S.Input>
        <S.Label for="book-img">Choose Image of Book</S.Label>
        <S.InputFile type="file" accept="image/png, image/jpeg"></S.InputFile>
        <S.PostButton type="submit">Post Book</S.PostButton>
      </S.Form>
    </S.Container>
  );
};
