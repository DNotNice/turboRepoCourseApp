"use client";
import {  Box, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useState } from "react";

export function Signup(props : {
    onClick : (name : string ,mail : string , Password : string)=> void  
}){
    const [Email , setEmail] = useState("")
    const [Password , setPassword] = useState("")
    const [Name , setName] = useState("")

    return ( 
        <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
              }}
            >
              <Typography component="h1" variant="h5">
                  Welcome , Sign up below
              </Typography>
              <Box component="form" noValidate  sx={{ mt: 3 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                      <TextField onChange={(e)=>{setName(e.target.value)}}
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="Your Name"/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField onChange={(e)=>{setEmail(e.target.value) }}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField onChange={(e)=>{setPassword(e.target.value) }}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={async()=>{props.onClick(Name ,Email, Password)}}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
    )
      
}