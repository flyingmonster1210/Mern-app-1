import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import GoalItem from '../components/GoalItem'
import { getGoals, reset } from '../features/goals/goalSlice'

function DashBoard() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)
  const { goals, isError, isLoading, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (user && user.token && !isError) {
      console.log('before getGoals')
      dispatch(getGoals())
    } else {
      if (isError) {
        console.log('isError, message: ', message)
      }
      navigate('/login')
    }

    return () => {
      dispatch(reset())
    }
  }, [dispatch, navigate, user, isError, message])

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

      <section className="content">
        {goals.length > 0 ? (
          <>
            <div className="goals">
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          </>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default DashBoard
