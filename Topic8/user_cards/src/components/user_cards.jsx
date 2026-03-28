function UserCards() {

  const users = [
    { id: 1, name: "Ali", role: "Developer" },
    { id: 2, name: "Sara", role: "Designer" },
    { id: 3, name: "Ahmed", role: "Manager" },
    { id: 4, name: "Zara", role: "Tester" },
    { id: 5, name: "Usman", role: "Frontend Dev" },
    { id: 6, name: "Hina", role: "Backend Dev" }
  ];

  function handleAdd(user) {
    console.log("Added:", user.name);
  }

  return (
    <div>
      <h2>User Cards</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {users.map((u) => (
          <div key={u.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "6px",
            width: "140px"
          }}>
            <h4>{u.name}</h4>
            <p>{u.role}</p>

            <button onClick={() => handleAdd(u)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCards;