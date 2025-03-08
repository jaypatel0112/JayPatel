import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import '../assets/styles/Contact.scss';

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'At least 2 characters'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required').min(10, 'At least 10 characters'),
});

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
      to_email: 'jaykrinapatel@gmail.com',
    };

    emailjs.send('service_xlipldj', 'template_yppdxt9', templateParams, 'j-XDBXWZfZFyB9q2l')
      .then(() => resetForm())
      .finally(() => setSubmitting(false));
  };

  return (
    <Container className="contact-container">
      <Box className="contact-box">
        <Typography variant="h4" fontWeight="bold" gutterBottom className="contact-title">
          Contact Me
        </Typography>
        <Typography variant="body1" gutterBottom className="contact-description">
          Got a project waiting to be realized? Let's collaborate and make it happen!
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="contact-input-group">
                <Field name="name">
                  {({ field, meta }: any) => (
                    <TextField
                      {...field}
                      label="Your Name *"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                      className="contact-input"
                      variant="filled"
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field, meta }: any) => (
                    <TextField
                      {...field}
                      label="Email / Phone *"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                      className="contact-input"
                      variant="filled"
                    />
                  )}
                </Field>
              </div>

              <Field name="message">
                {({ field, meta }: any) => (
                  <TextField
                    {...field}
                    label="Message *"
                    multiline
                    rows={4}
                    fullWidth
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                    className="contact-input"
                    variant="filled"
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                disabled={isSubmitting}
                className="contact-button"
              >
                SEND
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Contact;
