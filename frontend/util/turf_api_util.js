
export const fetchTurf = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/turfs/${id}`,
    error: (err) => console.log(err)
  });
};

export const fetchAllTurfs = () => {
  return $.ajax({
    method: "GET",
    url: `api/turfs`,
    error: (err) => console.log(err)
  });
};

export const createTurf = (turf) => {
  return $.ajax({
    method: 'POST',
    url: 'api/turfs',
    data: {voter}
  });
};

export const updateTurf = (turf) => {
  return $.ajax({
    method: 'GET',
    url: `api/turfs/${turf.id}/edit`,
    data: {turf}
  });
};

export const deleteTurf = (turf) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/turfs/${turf.id}`
  });
};
