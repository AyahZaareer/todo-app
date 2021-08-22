// import { useState } from 'react';

// const useForm = (props) => {

//   const [item, setItem] = useState({});

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     event.target.reset();
//     const rester = {};
//     props.handleSubmit(item);
//     setItem(rester);
//   };

//   const handleInputChange = (e) => {
//     setItem({ ...item, [e.target.name]: e.target.value });

//   }

//   // const handleChange = (event) => {
//   //   event.persist();
//   //   setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//   // };

//   return ([
//     handleInputChange,
//     handleSubmit,
//    item,]
//   );
// };

// export default useForm;



import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;