import { useForm } from "react-hook-form";
import { Container } from "../../components/Styled/Container.styled";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('fullName', { required: true, minLength: 3, })} name='fullname' placeholder="Full name" />
                <p>{errors.fullName?.message}</p>
                <input {...register('subject', {required:true, minLength: 3,})} placeholder="Subject.." />
                <p>{errors.subject?.message}</p>
                <input {...register('email', {required: true})} type="email" name="email" placeholder="Email" />
                <p>{errors.email?.message}</p>
                <input {...register('body', {required: true, minLength: 3,})} type="body" placeholder="Write your message here..." />
                <p>{errors.body?.message}</p>
                <button type="submit">Submit</button>
            </form>
        </Container>
    )
}