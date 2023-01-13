import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ParticipantCard from '../components/ParticipantCard'

interface Participant {
  id: number
  name: string
}

export default function ParticipantsView() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [participantName, setParticipantName] = useState<string | null>('')

  function onNameChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    console.log(e.target.value)
    setParticipantName(e.target.value)
  }


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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e)
    if (participantName)
    {
      axios.post(`http://localhost:5080/participants/`, {
        name: participantName
      })
    }
    axios.get('http://localhost:5080/participants')
      .then((response) => {
        setParticipants(response.data)
      })

  }

  return (
    <Box>
      <Typography variant='h2'>
        ParticipantsView
      </Typography>
      {
        participants.map((participant, index) => (
          <Box key={index} margin='20px'>
            <ParticipantCard name={participant.name} id={participant.id} handleDelete={handleDelete} />
          </Box>
        ))
      }
      <Box
        component='form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          onChange={onNameChange}
          id='addParticipant'
          label='Add who?'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  type='submit'
                  color='success'
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Box>
  )
}
