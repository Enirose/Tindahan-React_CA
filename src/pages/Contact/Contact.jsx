import { useForm } from "react-hook-form";
import { Container } from "../../components/Styled/Container.styled";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ContactForm } from "./Contact.styled";

const Schema = yup
    .object({
        fullName: yup
            .string()
            .trim()
            .min(3, 'Must be at least 3 characters long')
            .required(),
        subject: yup
            .string()
            .trim()
            .min(3, 'Must be at least 3 characters long')
            .required(),
        email: yup
            .string()
            .matches(/\S+@\S+\.\S+/, "Must be a valid email address")
            .required(),
        body: yup
            .string()
            .trim()
            .min(5, 'Must be at least 5 characters long')
            .max(5000, "Cannot be longer than 5000 characters")
            .required(),
    })
    .required();



export default function Contact () {
    const { register, handleSubmit, formState:{ errors }, } = useForm({ resolver : yupResolver (Schema)});

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <Container>
            <h1>Get in touch with us!</h1>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input {...register('fullName', { required: true, minLength: 3, })} name='fullName' placeholder="Full name" />
                <p>{errors.fullName?.message}</p>
                <label>Subject</label>
                <input {...register('subject', {required:true, minLength: 3,})} placeholder="Subject.." />
                <p>{errors.subject?.message}</p>
                <label>Email</label>
                <input {...register('email', {required: true})} type="email" name="email" placeholder="Email" />
                <p>{errors.email?.message}</p>
                <label>Message</label>
                <textarea {...register('body', {required: true, minLength: 3,})} type="body" placeholder="Write your message here..." />
                <p>{errors.body?.message}</p>
                <button type="submit">Submit</button>
            </ContactForm>
        </Container>
    )
}