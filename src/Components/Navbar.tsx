import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../Utils/Constants'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
        direction='row'
        alignItems='center'
        padding={2}
        sx={{position:'sticky', background:'#000', top: 0, justifyContent: 'space-between'}}
    >
        <Link to='/' style={{display: 'flex',alignItems: 'center'}}>
            <img src={logo} alt='logo' height={45}/>
            <span style={{color: 'white', fontFamily:'cursive'}}>YA MEDIA</span>
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar