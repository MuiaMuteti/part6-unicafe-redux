import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    voteAnecdote(state, action) {
      const anecdoteID = action.payload
      const anecdote = state.find(andt => andt.id === anecdoteID)
      const upvotedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }

      return state.map(andt => andt.id === anecdoteID? upvotedAnecdote : andt)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer