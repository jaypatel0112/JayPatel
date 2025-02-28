import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import '../assets/styles/Contact.scss';

// Yup validation schema
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, ' '),
});

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    if (form.current) {
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
        to_email: 'jaykrinapatel@gmail.com',
      };

      emailjs
        .send('service_xlipldj', 'template_yppdxt9', templateParams, 'j-XDBXWZfZFyB9q2l')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            resetForm();
          },
          (error) => {
            console.log('FAILED...', error);
          }
        )
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form ref={form}>
                <Box className="contact-form">
                  <div className="form-flex">
                    <Field
                      as={TextField}
                      required
                      id="name"
                      name="name"
                      label="Your Name"
                      placeholder="What's your name?"
                      fullWidth
                      helperText={<ErrorMessage name="name" />}
                    />
                    <Field
                      as={TextField}
                      required
                      id="email"
                      name="email"
                      label="Email / Phone"
                      placeholder="How can I reach you?"
                      fullWidth
                      helperText={<ErrorMessage name="email" />}
                    />
                  </div>
                  <Field
                    as={TextField}
                    required
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Send me any inquiries or questions"
                    multiline
                    rows={10}
                    fullWidth
                    className="body-form"
                    helperText={<ErrorMessage name="message" />}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    disabled={isSubmitting}
                  >
                    Send
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;