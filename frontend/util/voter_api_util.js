export const fetchVoter = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/voters/${id}`,
    error: (err) => console.log(err)
  });
};

export const fetchAllVoters = () => {
  return $.ajax({
    method: "GET",
    url: `api/voters`,
    error: (err) => console.log(err)
  });
};

export const createVoter = (voter) => {
  return $.ajax({
    method: 'POST',
    url: 'api/voters',
    data: voter
  });
};

export const updateVoter = (voter) => {
  return $.ajax({
    method: 'GET',
    url: `api/voters/${voter.id}/edit`,
    data: {voter}
  });
};

export const deleteVoter = (voter) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/voter/${voter.id}`
  });
};
