import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../Utils/Constants'
import { CategoryInterface } from './Feed'

const SideBar: React.FC<CategoryInterface> = ({selectedCategory, setSelectedCategory}) => {

    
    
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: {sx: 'auto', md: '95%'},
                flexDirection: {md: 'column'}
            }}
        >
          {categories.map(category=>{
            return (
            <button 
                className= 'category-btn' 
                onClick={()=>setSelectedCategory(category.name)}
                key={category.name}
                style= {{
                    color: 'white',
                    background: category.name === selectedCategory ? '#FC1503': ''
                }}
            >
                <span 
                    style={{color: category.name===selectedCategory? 'white':'red',
                    marginRight: '15px'}}>
                    {<category.icon/>}
                </span>
                <span style={{opacity: category.name===selectedCategory ? '1': '0.8'}}>
                    {category.name}
                </span>
            </button>
            )
          })}  
        </Stack>
    )
}

export default SideBar;