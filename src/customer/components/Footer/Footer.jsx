import { Button } from '@headlessui/react';
import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-alice-carousel';

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-10'
            container
            sx={{bgcolor:"black" , color:"white", py:3}}
        >   
            <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                    
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                    </div>
                    <div>
                    
                    <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Parters </Button>
                    </div>
                    
            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                    
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                    </div>
                    <div>
                    
                    <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Parters </Button>
                    </div>
                    
            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                    
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                    </div>
                    <div>
                    
                    <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Parters </Button>
                    </div>
                    
            </Grid>

            <Grid item xs={12} sm={6} md={3}>

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                    
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> press </Button>
                    </div>
                    <div>
                    
                    <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
                    </div>
                    <div>
                    <Button className='pb-5' variant='h6' gutterBottom> Parters </Button>
                    </div>
                    
            </Grid>


          <Grid className='pt-20' item xs={12}>
            <Typography variant='body2' component="p" align='center'>
                &copy; 2023 My Company. All rights reserved.
            </Typography>
            <Typography variant='body2' component="p" align='center'>
                Made with love by Me.
            </Typography>

            <Typography variant='body2' component="p" align='center'>
                Icon made by{' '}
                <Link href='https://www.freepik.com' color='inherit' underline="always">
                Freepik
                </Link>
              </Typography>

          </Grid>
        </Grid>
      
    </div>
  )
}

export default Footer
