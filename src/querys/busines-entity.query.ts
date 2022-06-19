const getTotalEmissions = `select SUM(emissions) from "businessEntity" where path like '%' || $1 ||'%'  `;

const getSequenceNextValue = `SELECT nextval('"businessEntity_id_seq"')`;

const create = `INSERT INTO "businessEntity" (id, name, path, emissions) values ( $1, $2, CONCAT((SELECT path FROM "businessEntity" where id = $3), ',' || $4),$5)`;

export const Query = {
  getTotalEmissions,
  getSequenceNextValue,
  create,
};