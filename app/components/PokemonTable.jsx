export default function PokemonTable(props) {

  // direct use bhi kar sakte the, but thoda clear rakh liya
  const list = props.data ? props.data : [];

  return (
    <table className="w-full border mt-4">

      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 text-left">Sr. Number</th>
          <th className="border p-2 text-left">Poke Name</th>
        </tr>
      </thead>

      <tbody>
        {list.map((p, index) => {

          // kabhi kabhi debugging ke liye log lagate hain (commented)
          // console.log(p);

          return (
            <tr
              key={index}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => props.onClick && props.onClick(p.url)}
            >
              <td className="border p-2">
                {index + 1}
              </td>

              <td className="border p-2 capitalize text-black">
                {p.name ? p.name : "unknown"}
              </td>
            </tr>
          );
        })}
      </tbody>

    </table>
  );
}