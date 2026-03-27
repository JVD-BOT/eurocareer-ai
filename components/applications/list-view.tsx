"use client";

import { useMemo, useState } from "react";
import type { Application } from "@/lib/types";
import { COLUMNS, COUNTRIES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

type SortField = "company_name" | "role_title" | "country" | "status" | "applied_date";
type SortDir = "asc" | "desc";

interface ListViewProps {
  applications: Application[];
  onRowClick: (app: Application) => void;
}

export function ListView({ applications, onRowClick }: ListViewProps) {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCountry, setFilterCountry] = useState("all");
  const [sortField, setSortField] = useState<SortField>("applied_date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const filtered = useMemo(() => {
    return applications
      .filter((app) => {
        const matchSearch = app.company_name.toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === "all" || app.status === filterStatus;
        const matchCountry = filterCountry === "all" || app.country === filterCountry;
        return matchSearch && matchStatus && matchCountry;
      })
      .sort((a, b) => {
        const av = (a[sortField] ?? "") as string;
        const bv = (b[sortField] ?? "") as string;
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sortDir === "asc" ? cmp : -cmp;
      });
  }, [applications, search, filterStatus, filterCountry, sortField, sortDir]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronsUpDown className="h-3.5 w-3.5 ml-1 opacity-40" />;
    return sortDir === "asc" ? (
      <ChevronUp className="h-3.5 w-3.5 ml-1 text-blue-600" />
    ) : (
      <ChevronDown className="h-3.5 w-3.5 ml-1 text-blue-600" />
    );
  };

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      className="flex items-center font-medium text-xs uppercase tracking-wide hover:text-foreground transition-colors"
      onClick={() => toggleSort(field)}
    >
      {children}
      <SortIcon field={field} />
    </button>
  );

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <Input
          placeholder="Search company…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs bg-white"
        />
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[160px] bg-white">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {COLUMNS.map((col) => (
              <SelectItem key={col.id} value={col.id}>
                {col.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterCountry} onValueChange={setFilterCountry}>
          <SelectTrigger className="w-[175px] bg-white">
            <SelectValue placeholder="All countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All countries</SelectItem>
            {COUNTRIES.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.flag} {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground ml-auto">
          {filtered.length} application{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-50">
              <TableHead>
                <SortButton field="company_name">Company</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="role_title">Role</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="country">Country</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="status">Status</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="applied_date">Applied</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-12">
                  {applications.length === 0
                    ? 'No applications yet. Click "+ Add Application" to get started.'
                    : "No results match your filters."}
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((app) => {
                const country = COUNTRIES.find((c) => c.code === app.country);
                const statusConfig = COLUMNS.find((c) => c.id === app.status);
                return (
                  <TableRow
                    key={app.id}
                    className="cursor-pointer"
                    onClick={() => onRowClick(app)}
                  >
                    <TableCell>
                      <p className="font-medium text-sm">{app.company_name}</p>
                      {app.visa_sponsorship && (
                        <span className="text-xs text-blue-600 font-medium">🛂 Visa sponsor</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{app.role_title}</TableCell>
                    <TableCell>
                      {country ? (
                        <span className="flex items-center gap-1.5 text-sm">
                          <span>{country.flag}</span>
                          <span className="text-gray-600 hidden md:inline">{country.name}</span>
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {statusConfig && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${statusConfig.headerBg} ${statusConfig.headerText}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dotColor}`} />
                          {statusConfig.label}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {app.applied_date
                        ? new Date(app.applied_date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
