import React, { useState, useEffect } from "react";
import { Navbar, Footer, signedIn } from "../components";
import { BuyDepartment } from "../components/buySections/BuyDepartment";
import { BuyClass } from "../components/buySections/class/BuyClass";
import { Book } from "../components/buySections/book/Book";

export default function Buy() {
  const [depStatus, setDepStatus] = useState(true);
  const [classStatus, setClassStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);
  const [department, setDept] = useState({
    id: 1,
    department: "Math",
    classes: [],
  });

  const [book, setBook] = useState({});
  const [clss, setClss] = useState("");
  const data = [
    {
      id: 1,
      department: "Computer",
      classes: [
        {
          id: 31,
          course: "COSC 236",
          books: [
            {
              id: 11,
              title: "Intro to Prog",
              author: "Eric Run",
              ispn: 123456789,
              edition: "Third",
              publisher: "McHill",
              image: "",
              type: "sell",
            },
            {
              id: 12,
              title: "Intro to Prog",
              author: "Eric Run",
              ispn: 123456789,
              edition: "Third",
              publisher: "McHill",
              image: "",
              type: "trade",
            },
            {
              id: 13,
              title: "Intro to Prog",
              author: "Eric Run",
              ispn: 123456789,
              edition: "Fourth",
              publisher: "McHill",
              image: "",
              type: "sell",
            },
          ],
        },
        {
          id: 32,
          course: "COSC 290",
          books: [
            {
              id: 111,
              title: "Intro to OS",
              author: "John Doe",
              ispn: 452323213,
              edition: "Second",
              publisher: "BillBooks",
              image: "",
              type: "trade",
            },

            {
              id: 211,
              title: "Intro to OS",
              author: "Will Snow",
              ispn: 5434974,
              edition: "Fourth",
              publisher: "JanesBooks",
              image: "",
              type: "trade",
            },

            {
              id: 311,
              title: "Intro to OS",
              author: "John Doe",
              ispn: 452323213,
              edition: "First",
              publisher: "BillBooks",
              image: "",
              type: "sell",
            },
          ],
        },
        {
          id: 33,
          course: "COSC 336",
          books: [
            {
              id: 1111,
              title: "Intro to Algorithms",
              author: "Thomas Kay",
              ispn: 90783462,
              edition: "Third",
              publisher: "MIT Press",
              image: "",
              type: "sell",
            },
            {
              id: 1112,
              title: "Intro to Algorithms",
              author: "Jane Hill",
              ispn: 83478907,
              edition: "Sixth",
              publisher: "McRib",
              image: "",
              type: "sell",
            },
            {
              id: 1113,
              title: "Intro to Algorithms",
              author: "Alex T",
              ispn: 90783462,
              edition: "Second",
              publisher: "FlyingHills",
              image: "",
              type: "trade",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      department: "English",
      classes: [
        {
          id: 21,
          course: "ENG 190",
          books: [
            {
              id: 11111,
              title: "Writing Skills",
              author: "Eric Run",
              ispn: 123456789,
              edition: "Fourth",
              publisher: "McHill",
              image: "",
              type: "sell",
            },
            {
              id: 11112,
              title: "Intro To Writing",
              author: "Emily Walk",
              ispn: 123456789,
              edition: "Seventh",
              publisher: "McHill",
              image: "",
              type: "sell",
            },
            {
              id: 11113,
              title: "How to Write",
              author: "Eric Run",
              ispn: 123456789,
              edition: "Sixth",
              publisher: "McHill",
              image: "",
              type: "trade",
            },
          ],
        },
        {
          id: 22,
          course: "ENG 240",
          books: [
            {
              id: 41,
              title: "How to Read",
              author: "John Doe",
              ispn: 452323213,
              edition: "Second",
              publisher: "BillBooks",
              image: "",
              type: "trade",
            },

            {
              id: 42,
              title: "Intro Reading",
              author: "Will Snow",
              ispn: 5434974,
              edition: "Fourth",
              publisher: "JanesBooks",
              image: "",
              type: "sell",
            },

            {
              id: 43,
              title: "Reading Now",
              author: "John Doe",
              ispn: 452323213,
              edition: "Eighth",
              publisher: "BillBooks",
              image: "",
              type: "sell",
            },
          ],
        },
        {
          id: 23,
          course: "ENG 317",
          books: [
            {
              id: 51,
              title: "Business Writing",
              author: "Thomas Kay",
              ispn: 90783462,
              edition: "Third",
              publisher: "MIT Press",
              image: "",
              type: "sell",
            },
            {
              id: 52,
              title: "Intro to Business Writing",
              author: "Jane Hill",
              ispn: 83478907,
              edition: "Sixth",
              publisher: "McRib",
              image: "",
              type: "trade",
            },
            {
              id: 53,
              title: "Writing the Business",
              author: "Alex T",
              ispn: 90783462,
              edition: "Second",
              publisher: "FlyingHills",
              image: "",
              type: "trade",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      department: "Mathematics",
      classes: [
        {
          id: 1,
          course: "MATH 101",
          books: [
            {
              id: 1,
              title: "How to Count",
              author: "Count Drack",
              ispn: 123456789,
              edition: "Second",
              publisher: "McHill",
              image: "",
              type: "sell",
            },
            {
              id: 2,
              title: "Intro to Counting",
              author: "Emily Walk",
              ispn: 89349834,
              edition: "Third",
              publisher: "Ronald",
              image: "",
              type: "sell",
            },
            {
              id: 3,
              title: "You want to count?",
              author: "Bill Count",
              ispn: 29023432,
              edition: "Fourth",
              publisher: "McRib",
              image: "",
              type: "sell",
            },
          ],
        },
        {
          id: 2,
          course: "MATH 270",
          books: [
            {
              id: 1,
              title: "Intro to Calc",
              author: "Jess Love",
              ispn: 452323213,
              edition: "Ninth",
              publisher: "BillBooks",
              image: "",
              type: "trade",
            },

            {
              id: 2,
              title: "Guide to Calc",
              author: "Will Snow",
              ispn: 5434974,
              edition: "Tenth",
              publisher: "JanesBooks",
              image: "",
              type: "sell",
            },

            {
              id: 3,
              title: "Calc Fun",
              author: "John Doe",
              ispn: 452323213,
              edition: "Third",
              publisher: "BillBooks",
              image: "",
              type: "sell",
            },
          ],
        },
        {
          id: 3,
          course: "MATH 330",
          books: [
            {
              id: 1,
              title: "Stats Guide",
              author: "Thomas Kay",
              ispn: 90783462,
              edition: "Third",
              publisher: "MIT Press",
              image: "",
              type: "sell",
            },
            {
              id: 2,
              title: "Got Stats",
              author: "Jane Hill",
              ispn: 83478907,
              edition: "Second",
              publisher: "McRib",
              image: "",
              type: "sell",
            },
            {
              id: 3,
              title: "StatsRUS",
              author: "Alex T",
              ispn: 90783462,
              edition: "Fourth",
              publisher: "FlyingHills",
              image: "",
              type: "trade",
            },
          ],
        },
      ],
    },
  ];

  const [searchData, setData] = useState(data);
  const [searchCourse, setCourse] = useState(department);

  const clickedDept = (id) => {
    setDept((prev) => {
      const [d] = data.filter((dept) => dept.id === id);
      return { id: d.id, department: d.department, classes: d.classes };
    });
    setCourse((prev) => {
      const [d] = data.filter((dept) => dept.id === id);
      return { id: d.id, department: d.department, classes: d.classes };
    });

    fromDeptToClasses();
  };

  const fromDeptToClasses = () => {
    setDepStatus((prev) => (prev = !depStatus));
    setClassStatus((prev) => (prev = !classStatus));
  };

  const fromClassesToDept = () => {
    console.log("back");
    setDepStatus((prev) => (prev = !depStatus));
    setClassStatus((prev) => (prev = !classStatus));
  };

  const clickedBook = (id) => {
    setBook(() => {
      const b = searchData.filter((bk) => bk);
    });
  };

  const fromBookToClasses = () => {
    console.log("back to classes");
    setClassStatus((prev) => (prev = !classStatus));
    setBookStatus((prev) => (prev = !bookStatus));
  };

  const getClass = (e, course, bk) => {
    setBook(() => {
      return { ...bk };
    });
    setClss((prev) => (prev = course.course));

    setClassStatus((prev) => (prev = !classStatus));
    setBookStatus((prev) => (prev = !bookStatus));
  };

  const searchDept = (e) => {
    const d = data.filter((dept) =>
      dept.department.toLowerCase().includes(e.target.value)
    );
    setData((prev) => (prev = d));
  };

  const searchClass = (e, course) => {
    const cl = department.classes.filter((cl) =>
      cl.course.toLowerCase().includes(e.target.value)
    );
    setCourse((prevState) => {
      return { ...prevState, classes: cl };
    });
  };

  return (
    <div className="buy" style={{ background: "#44318D" }}>
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }}/>
      {depStatus ? (
        <BuyDepartment
          heading="Department"
          button={false}
          depInfo={searchData}
          clickedDept={clickedDept}
          search={searchDept}
        />
      ) : (
        ""
      )}
      {classStatus ? (
        <BuyClass
          heading="Class"
          button={true}
          classInfo={searchCourse}
          backToDept={fromClassesToDept}
          getClass={getClass}
          searchClass={searchClass}
        />
      ) : (
        ""
      )}
      {bookStatus ? (
        <Book
          button={true}
          clas={clss}
          book={book}
          backToClasses={fromBookToClasses}
        />
      ) : (
        ""
      )}
      {/* <Footer /> */}
    </div>
  );
}
