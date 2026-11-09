export default function Country() {
    return (
        <details open className="group border-b border-white/10 p-4">
            <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none">
                Country{" "}
                <i className="ti ti-chevron-up group-open:rotate-0 rotate-180 transition"></i>
            </summary>
            <select className="mt-3 w-full border border-white/30 bg-[#2a0a85] px-2 py-1.5 text-sm outline-none">
                <option>All countries</option>
                <option>Lithuania</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
            </select>
        </details>
    );
}
