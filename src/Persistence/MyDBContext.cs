using Microsoft.EntityFrameworkCore;

namespace Persistence;
public class MyDBContext : DbContext
{
    public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { 

    }

}
