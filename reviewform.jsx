import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from "react-bootstrap"; 
import Stars from "./stars/stars.jsx"; 


export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [value, setValue] = useState("");
  const [star, setStar] = useState();

  const onChange = (e) => {
    setReviews(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(reviews + " with " + star + " star");
  };

  return (
    <div className="form-container">
      <div><Stars setStar={setStar} /></div>
      <Form onSubmit={onSubmit}>
        <FormControl
          className="form-control"
          type="text"
          placeholder="Enter your review"
          value={reviews}
          onChange={onChange}
        />
        <br />
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
        <div>{value}</div>
      </Form>
    </div>
  );
}
