import React from 'react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import {
  TextField,
  Select,
  Button,
  makeStyles,
  Theme,
  MenuItem,
} from '@material-ui/core'
import axios from 'axios'
import { object, string } from 'yup'

const validationSchema = object({
  firstName: string().required('firstname is required'),
  lastName: string().required(),
  gender: string().required(),
  email: string().required(),
})
const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '30vw',
  },
  field: {
    margin: theme.spacing(1),
  },
}))
const initialValues = {
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
}

function UserForm() {
  const classes = useStyles()

  //using single form for creating and editing. asuming these dumming data are from your db
  //   const data = {
  //     firstName: 'Bili',
  //     lastName: 'jimoh',
  //     gender: 'male',
  //     email: 'biliaminu.jimoh@interify.io',
  //   }
  const handleSubmit = async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    console.log('values', values)
    //Instead of consol logging do this in the real project
    // if (data) {
    //   await axios.post('user/edit', values)
    //   //end
    // } else {
    //   await axios.post('user/create', values)
    // }
    setTimeout(() => {
      actions.setSubmitting(false)
    }, 1000)
  }

  const FormikMuiSelect = (props: any) => {
    console.log('props', props)
    const options = props.options
    return (
      <Select onChange={props.onChange} value={props.value} name={props.name}>
        {options.map((option: string, index: number) => (
          <MenuItem key={index} value={option}>
            {' '}
            {option}
          </MenuItem>
        ))}
      </Select>
    )
  }

  return (
    <div>
      <Formik
        //initialValues={data ?? initialValues}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, dirty, isValid }) => {
          return (
            <Form className={classes.form}>
              <Field
                name="firstName"
                type="text"
                as={TextField}
                className={classes.field}
              />
              <Field
                name="lastName"
                type="text"
                as={TextField}
                className={classes.field}
              />
              <Field
                name="gender"
                type="text"
                options={['male', 'female', '']}
                as={FormikMuiSelect}
                className={classes.field}
              />
              <Field
                name="email"
                type="select"
                as={TextField}
                className={classes.field}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting || !dirty || !isValid}
              >
                Submit
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default UserForm
