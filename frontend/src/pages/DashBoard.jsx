import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function DashBoard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  )
  // const goals = useSelector((state) => state.goals)

  useEffect(() => {
    // console.log('goals: ', goals)
    // console.log('user: ', user)
    if (!user) {
      navigate('/login')
    }

    if (isError) {
      console.log('isError, message: ', message)
    }

    console.log('before dispatch getGoals')
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, user, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />
    </>
  )
}

export default DashBoard
