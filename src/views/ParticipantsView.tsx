import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ParticipantCard from '../components/ParticipantCard'

interface Participant {
  id: number
  name: string
}

export default function ParticipantsView() {
  const [participants, setParticipants] = useState<Participant[]>([])
  useEffect(() => {
    axios.get('http://localhost:5080/participants')
      .then((response) => {
        setParticipants(response.data)
      })
  }, [])

  async function handleDelete(params: number) {
    console.log(params)
    await axios.delete(`http://localhost:5080/participants/${params}`)
    const newParticipants = participants.filter(participant => participant.id != params)
    setParticipants(newParticipants)
  }


  return (
    <Box>
      <Typography variant='h1'>
        ParticipantsView
      </Typography>
      {
        participants.map((participant, index) => (
          <Box key={index} margin='20px'>
            <ParticipantCard name={participant.name} id={participant.id} handleDelete={handleDelete} />
          </Box>
        ))
      }
    </Box>
  )
}
