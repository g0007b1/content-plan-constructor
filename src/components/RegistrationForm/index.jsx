import {useForm} from "react-hook-form";
import {useActions} from "../../hooks/useActions";
import {Box, Button, Container, TextField, Typography} from "@mui/material";

export const RegistrationForm = (props) => {

    const {register, handleSubmit} = useForm()
    const {registerAction} = useActions()

    const onSubmit = (data) => {
        registerAction(data)
    }

    return (
        <>
            {/*<div>*/}
            {/*    <form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*        /!*<input {...register('email')} placeholder={'email'}/>*!/*/}
            {/*        /!*<input {...register('password')} placeholder={'password'}/>*!/*/}
            {/*        /!*<input {...register('login')} placeholder={'login'}/>*!/*/}
            {/*        <input {...register('name')} placeholder={'name'}/>*/}
            {/*        <button type="submit">Login</button>*/}
            {/*    </form>*/}
            {/*</div>*/}

            <Container component={"div"} maxWidth='xs'>
                <Box sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography component='h1' variant='h5'>Зарегистрироваться</Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt:1}}>
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   autoComplete={"email"}
                                   autoFocus
                                   label='Email'
                                   {...register('email')}
                        />
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   autoComplete={"password"}
                                   label='Пароль'
                                   {...register('password')}
                        />
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   autoComplete={"login"}
                                   label='Логин'
                                   {...register('login')}
                        />
                        <TextField margin="normal"
                                   required
                                   fullWidth
                                   autoComplete={"name"}
                                   label='Ваше имя'
                                   {...register('name')}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{mt:3, mb: 2}}
                        >
                            Зарегистрироваться
                        </Button>

                    </Box>
                </Box>
            </Container>
        </>
    )
}