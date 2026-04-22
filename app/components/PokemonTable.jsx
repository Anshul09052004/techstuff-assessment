export default function PokemonTable({ data, onClick }) {
    return (
        <table className="w-full border mt-4">


            <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2 text-left">Sr. Number</th>
                    <th className="border p-2 text-left">Poke Name</th>
                </tr>
            </thead>

            <tbody>
                {data.map((p, i) => (
                    <tr
                        key={i}
                        onClick={() => onClick(p.url)}
                        className="cursor-pointer hover:bg-gray-100"
                    >
                        <td className="border p-2">{i + 1}</td>

                        <td className="border p-2 capitalize text-blue-600">
                            {p.name}
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}