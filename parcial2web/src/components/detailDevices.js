function DetailDevices(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.count}</th>
        <td>{props.device.id}</td>
        <td>{props.device.name}</td>
        <td>{props.device.desired.value}</td>
      </tr>
    </>
  );
}

export default DetailDevices;
