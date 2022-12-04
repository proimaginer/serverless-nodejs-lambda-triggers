const pg = require('../../../lib/pg');

exports.handler = async (event) => {
  const db = await pg.connect();

  try {
    await db.query('BEGIN');

    // 로직 작성
    console.log('event >> ', event);

    // 쿼리 커밋
    await db.query('COMMIT');
    console.log('success');
  } catch (e) {
    // 쿼리 롤백
    await db.query('ROLLBACK');
    console.error(e);
  } finally {
    db.release();
    console.log('end');
  }
};
