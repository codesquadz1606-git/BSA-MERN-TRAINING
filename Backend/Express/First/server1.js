const express = require("express");
const app = express();

let notes = [];

app.use(express.json());

app.get("/allnotes", (req, res) => {
  res.json({
    message: "All Notes Fetched",
    notes,
  });
});
app.post("/note", (req, res) => {
  let data = req.body;
  notes.push(data);

  res.json({
    message: "Note Added",
    notes,
  });
});
app.put("/note/:id", (req, res) => {
  const { id } = req.params;
  const {task} = req.body;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
    //   console.log(notes[i]);
        notes[i].task=task;
      res.json({
        message:"Data Updated",
        data: notes[i],
      });
    }
  }

//   res.send(id)
res.json({
    notes:notes.length
})
});
// app.delete()

app.listen(3000, () => {
  console.log("Listening at PORT 3000");
});