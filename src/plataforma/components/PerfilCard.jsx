import { Edit, LocationOn } from '@mui/icons-material'
import { Avatar, Box, Card, Stack, Typography, Chip, Switch, Divider, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import '../../ui/components/App.css'
import { useParams } from 'react-router-dom'
import { useAuthStore } from '../../hook'

export const PerfilCard = () => {
    const { startLogout, user} = useAuthStore();
    return (
        <div className='p-top-57'>
            <Card>
                <Box sx={{ p: 2, display: 'flex' }}>
                    <Avatar variant="rounded" src="" />
                    <Stack spacing={0.5}>
                        <Typography fontWeight={700}>{user.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            <LocationOn sx={{ color: grey[500] }} /> Scranton, PA
                        </Typography>
                    </Stack>
                    <IconButton>
                        <Edit sx={{ fontSize: 14 }} />
                    </IconButton>

                </Box>
                <Divider />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                    
                    <Switch />
                </Stack>
            </Card>
        </div>
    )
}
