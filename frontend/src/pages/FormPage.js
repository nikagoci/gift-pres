import React from "react";

import Form from '../components/Form'

const FormPage = () => {
  return (
    <section className="py-8 header-height">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FormPage;
