import React from "react";
import { Link } from "react-router-dom";
import { useGetServicesQuery } from "../../features/services/servicesApi";
import Loading from "../shared/Loading";

export default function Services() {
  const { data: services, isLoading } = useGetServicesQuery({ page: 0, size: 6 });
  const renderServices = services?.map(({ _id, name }) => (
    <li key={name}>
      <Link to={`services/${_id}`} className="text-gray-700 transition hover:opacity-75 lowercase">
        {name}
      </Link>
    </li>
  ));
  return (
    <div>
      <Loading visible={isLoading} />
      <p className="font-medium text-gray-900">Services</p>

      <nav aria-label="Footer Navigation - Services" className="mt-6">
        <ul className=" space-y-4 text-sm">{renderServices}</ul>
      </nav>
    </div>
  );
}
