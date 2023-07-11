import dbInstance from '../dbInstance';

export default async function getCars(page, offset) {
  const carsRefs = dbInstance.collection('potentialCars');
  const countPromise = carsRefs.count().get();
  const snapshotPromise = carsRefs
    .limit(offset)
    .offset(page * offset)
    .get();

  const [snapshot, count] = await Promise.all([snapshotPromise, countPromise]);

  // Update status of all cars
  for (let doc of snapshot.docs) {
    if (!doc.data().status) {
      const carRef = carsRefs.doc(doc.id);
      await carRef.set(
        {
          status: 1,
        },
        { merge: true }
      );
    }
  }

  return {
    data: snapshot.docs.map((doc) => doc.data()),
    count: count.data().count,
  };
}
