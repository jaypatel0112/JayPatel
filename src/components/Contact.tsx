import emailjs from '@emailjs/browser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  TextField,
  Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Field, Formik } from 'formik';
import { forwardRef, ReactElement, useRef, useState } from 'react';
import * as Yup from 'yup';
import '../assets/styles/Contact.scss';

// Custom transition for the dialog
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const contactSchema = Yup.object().shape({
  name: Yup.string().required('Please tell us your name').min(2, 'Your name seems too short'),
  email: Yup.string().email('This email doesn\'t look quite right').required('We need your email to reach you'),
  message: Yup.string().required('Don\'t forget to include your message').min(10, 'Tell us a bit more, please'),
});

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  isError: boolean;
}

function AlertDialog({ open, onClose, title, message, isError }: AlertDialogProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          borderRadius: '16px',
          padding: '10px',
          backgroundColor: isError ? '#FFF5F5' : '#F0FFF4',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%'
        },
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        color: isError ? '#E53E3E' : '#38A169',
        fontWeight: 'bold'
      }}>
        {isError ? 
          <ErrorOutlineIcon sx={{ mr: 1 }} /> : 
          <CheckCircleOutlineIcon sx={{ mr: 1 }} />
        }
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: isError ? '#E53E3E' : '#38A169',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: isError ? '#742A2A' : '#1C4532' }}>
          {message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ 
    title: '', 
    message: '', 
    isError: true 
  });

  const showAlert = (title: string, message: string, isError: boolean) => {
    setAlertInfo({ title, message, isError });
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    // Form validation is handled by Yup schema, this is just extra validation
    if (!values.name || !values.email || !values.message || values.message.length < 10 || 
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      
      let errorTitle = "I Need More Information";
      let errorMessage = "Please check the form fields and try again.";
      
      if (!values.name) {
        errorTitle = "Name Missing";
        errorMessage = "I'd love to know who we're talking to! Please share your name with us.";
      } else if (!values.email) {
        errorTitle = "Email Required";
        errorMessage = "We need your email to get back to you. Don't worry, I won't spam you!";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errorTitle = "Email Doesn't Look Right";
        errorMessage = "That email address seems a bit off. Could you double-check it?";
      } else if (!values.message) {
        errorTitle = "Message Missing";
        errorMessage = "Don't be shy! Tell us what's on your mind.";
      } else if (values.message.length < 10) {
        errorTitle = "Message Too Brief";
        errorMessage = "I'd love to hear more from you. Could you elaborate a bit?";
      }
      
      showAlert(errorTitle, errorMessage, true);
      setSubmitting(false);
      return;
    }

    // If all fields are valid, send the email
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
      to_email: 'jaykrinapatel@gmail.com',
    };

    emailjs.send('service_xlipldj', 'template_yppdxt9', templateParams, 'j-XDBXWZfZFyB9q2l')
      .then(() => {
        showAlert(
          "Message Sent Successfully!", 
          "Thanks for reaching out! I'll get back to you as soon as possible.", 
          false
        );
        resetForm();
      })
      .catch(() => {
        showAlert(
          "Oops! Something Went Wrong", 
          "I couldn't send your message. Please try again or contact us directly.", 
          true
        );
      })
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
          validateOnBlur
          validateOnChange
        >
          {({ handleSubmit, isSubmitting, touched, errors }) => (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="contact-input-group">
                <Field name="name">
                  {({ field, meta }: any) => (
                    <TextField
                      {...field}
                      label="Your Name *"
                      fullWidth
                      className="contact-input"
                      variant="filled"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      FormHelperTextProps={{
                        style: { opacity: 0.75, fontStyle: 'italic' }
                      }}
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field, meta }: any) => (
                    <TextField
                      {...field}
                      label="Email / Phone *"
                      fullWidth
                      className="contact-input"
                      variant="filled"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      FormHelperTextProps={{
                        style: { opacity: 0.75, fontStyle: 'italic' }
                      }}
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
                    className="contact-input"
                    variant="filled"
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                    FormHelperTextProps={{
                      style: { opacity: 0.75, fontStyle: 'italic' }
                    }}
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
      
      {/* Custom Alert Dialog instead of Toast */}
      <AlertDialog 
        open={alertOpen}
        onClose={handleCloseAlert}
        title={alertInfo.title}
        message={alertInfo.message}
        isError={alertInfo.isError}
      />
    </Container>
  );
}

export default Contact;