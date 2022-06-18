const User = ({name, createdAt, deductedPoints}) => {
  const points = Math.floor((Date.now() - createdAt)/1000).deductedPoints;
  return (
    <div className="user">
      <div className="user-name">{name}</div>
      <div className="user-points">{points}</div>
    </div>
  );
}
export default User;
