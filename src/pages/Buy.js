import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '../components';
import { BuyDepartment } from '../components/buySections/BuyDepartment';
import { BuyClass } from '../components/buySections/class/BuyClass';

export const Buy = () => {
  const [depStatus, setDepStatus] = useState(true);
  const [classStatus, setClassStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);
  const [department, setDept] = useState({
    id: 1,
    department: 'Math',
    classes: [],
  });
  const [data, setData] = useState([
    {
      id: 1,
      department: 'Computer',
      classes: [
        {
          id: 1,
          course: 'COSC 236',
          books: [
            {
              id: 1,
              title: 'Intro to Prog',
              author: 'Eric Run',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
            {
              id: 2,
              title: 'Intro to Prog',
              author: 'Eric Run',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
            {
              id: 3,
              title: 'Intro to Prog',
              author: 'Eric Run',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
          ],
        },
        {
          id: 2,
          course: 'COSC 290',
          books: [
            {
              id: 1,
              title: 'Intro to OS',
              author: 'John Doe',
              ispn: 452323213,
              edition: 2,
              publisher: 'BillBooks',
              image: '',
            },

            {
              id: 2,
              title: 'Intro to OS',
              author: 'Will Snow',
              ispn: 5434974,
              edition: 4,
              publisher: 'JanesBooks',
              image: '',
            },

            {
              id: 3,
              title: 'Intro to OS',
              author: 'John Doe',
              ispn: 452323213,
              edition: 2,
              publisher: 'BillBooks',
              image: '',
            },
          ],
        },
        {
          id: 3,
          course: 'COSC 336',
          books: [
            {
              id: 1,
              title: 'Intro to Algorithms',
              author: 'Thomas Kay',
              ispn: 90783462,
              edition: 3,
              publisher: 'MIT Press',
              image: '',
            },
            {
              id: 2,
              title: 'Intro to Algorithms',
              author: 'Jane Hill',
              ispn: 83478907,
              edition: 6,
              publisher: 'McRib',
              image: '',
            },
            {
              id: 3,
              title: 'Intro to Algorithms',
              author: 'Alex T',
              ispn: 90783462,
              edition: 2,
              publisher: 'FlyingHills',
              image: '',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      department: 'English',
      classes: [
        {
          id: 1,
          course: 'Eng 190',
          books: [
            {
              id: 1,
              title: 'Writing Skills',
              author: 'Eric Run',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
            {
              id: 2,
              title: 'Intro To Writing',
              author: 'Emily Walk',
              ispn: 123456789,
              edition: 2,
              publisher: 'McHill',
              image: '',
            },
            {
              id: 3,
              title: 'How to Write',
              author: 'Eric Run',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
          ],
        },
        {
          id: 2,
          course: 'COSC 240',
          books: [
            {
              id: 1,
              title: 'How to Read',
              author: 'John Doe',
              ispn: 452323213,
              edition: 2,
              publisher: 'BillBooks',
              image: '',
            },

            {
              id: 2,
              title: 'Intro to OS',
              author: 'Will Snow',
              ispn: 5434974,
              edition: 4,
              publisher: 'JanesBooks',
              image: '',
            },

            {
              id: 3,
              title: 'Intro to OS',
              author: 'John Doe',
              ispn: 452323213,
              edition: 2,
              publisher: 'BillBooks',
              image: '',
            },
          ],
        },
        {
          id: 3,
          course: 'COSC 336',
          books: [
            {
              id: 1,
              title: 'Intro to Algorithms',
              author: 'Thomas Kay',
              ispn: 90783462,
              edition: 3,
              publisher: 'MIT Press',
              image: '',
            },
            {
              id: 2,
              title: 'Intro to Algorithms',
              author: 'Jane Hill',
              ispn: 83478907,
              edition: 6,
              publisher: 'McRib',
              image: '',
            },
            {
              id: 3,
              title: 'Intro to Algorithms',
              author: 'Alex T',
              ispn: 90783462,
              edition: 2,
              publisher: 'FlyingHills',
              image: '',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      department: 'Mathematics',
      classes: [
        {
          id: 1,
          course: 'MATH 101',
          books: [
            {
              id: 1,
              title: 'How to Count',
              author: 'Count Drake',
              ispn: 123456789,
              edition: 3,
              publisher: 'McHill',
              image: '',
            },
            {
              id: 2,
              title: 'Intro to Counting',
              author: 'Emily Walk',
              ispn: 89349834,
              edition: 2,
              publisher: 'Ronald',
              image: '',
            },
            {
              id: 3,
              title: 'You want to count?',
              author: 'Bill Count',
              ispn: 29023432,
              edition: 5,
              publisher: 'McRib',
              image: '',
            },
          ],
        },
        {
          id: 2,
          course: 'MATH 270',
          books: [
            {
              id: 1,
              title: 'Intro to Calc',
              author: 'Jess Love',
              ispn: 452323213,
              edition: 4,
              publisher: 'BillBooks',
              image: '',
            },

            {
              id: 2,
              title: 'Guide to Calc',
              author: 'Will Snow',
              ispn: 5434974,
              edition: 7,
              publisher: 'JanesBooks',
              image: '',
            },

            {
              id: 3,
              title: 'Calc Fun',
              author: 'John Doe',
              ispn: 452323213,
              edition: 2,
              publisher: 'BillBooks',
              image: '',
            },
          ],
        },
        {
          id: 3,
          course: 'MATH 330',
          books: [
            {
              id: 1,
              title: 'Stats Guide',
              author: 'Thomas Kay',
              ispn: 90783462,
              edition: 3,
              publisher: 'MIT Press',
              image: '',
            },
            {
              id: 2,
              title: 'Got Stats',
              author: 'Jane Hill',
              ispn: 83478907,
              edition: 6,
              publisher: 'McRib',
              image: '',
            },
            {
              id: 3,
              title: 'StatsRUS',
              author: 'Alex T',
              ispn: 90783462,
              edition: 2,
              publisher: 'FlyingHills',
              image: '',
            },
          ],
        },
      ],
    },
  ]);

  const clickedDept = (id) => {
    console.log(id);

    setDept((prev) => {
      const d = data.filter((dept) => dept.id === id);
      const dat = d[0];
      return { id: dat.id, department: dat.department, classes: dat.classes };
    });

    changeScreen();
  };

  const changeScreen = () => {
    setDepStatus((prev) => (prev = !depStatus));
    setClassStatus((prev) => (prev = !classStatus));
  };

  return (
    <div className="buy" style={{ background: '#44318D' }}>
      <Navbar />
      {depStatus ? (
        <BuyDepartment
          heading="Department"
          button={false}
          depInfo={data}
          clickedDept={clickedDept}
        />
      ) : (
        ''
      )}
      {classStatus ? (
        <BuyClass heading="Class" button={true} classInfo={department} />
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
};
