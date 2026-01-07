function UserSelect({users, loading, setUserId}){
  if(loading) return <p>Loading users...</p>
  return(
    <select onChange={(e) => setUserId(e.target.value)}>
      <option value="">Select a user</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}

        </option>
      ))}
    </select>
  )
}
export default UserSelect;