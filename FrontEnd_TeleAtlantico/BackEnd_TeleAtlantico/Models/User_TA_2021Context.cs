using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BackEnd_TeleAtlantico.Models
{
    public partial class User_TA_2021Context : DbContext
    {
        public User_TA_2021Context()
        {
        }

        public User_TA_2021Context(DbContextOptions<User_TA_2021Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Issue> Issues { get; set; }
        public virtual DbSet<Note> Notes { get; set; }
        public virtual DbSet<Service> Services { get; set; }
        public virtual DbSet<ServiceSupporter> ServiceSupporters { get; set; }
        public virtual DbSet<Supervisor> Supervisors { get; set; }
        public virtual DbSet<Supporter> Supporters { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-V2VCPIJ;Initial Catalog=User_TA_2021;User ID=sa;Password=123456");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Issue>(entity =>
            {
                entity.ToTable("Issue");

                entity.Property(e => e.IssueId)
                    .ValueGeneratedNever()
                    .HasColumnName("issueId");

                entity.Property(e => e.Clasification)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("clasification");

                entity.Property(e => e.Creationdate)
                    .HasColumnType("datetime")
                    .HasColumnName("creationdate");

                entity.Property(e => e.Idsupporter).HasColumnName("idsupporter");

                entity.Property(e => e.Modificationdate)
                    .HasColumnType("datetime")
                    .HasColumnName("modificationdate");

                entity.Property(e => e.Modificationsser)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("modificationsser");

                entity.Property(e => e.Register)
                    .HasColumnType("datetime")
                    .HasColumnName("register");

                entity.Property(e => e.Report).HasColumnName("report");

                entity.Property(e => e.Resolution)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("resolution");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("status");

                entity.Property(e => e.Usercreation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("usercreation");

                entity.HasOne(d => d.IdsupporterNavigation)
                    .WithMany(p => p.Issues)
                    .HasForeignKey(d => d.Idsupporter)
                    .HasConstraintName("FK_IdSupporter_Issue");
            });

            modelBuilder.Entity<Note>(entity =>
            {
                entity.HasKey(e => e.IdNote)
                    .HasName("PK__Note__4B2ACFF692CC6614");

                entity.ToTable("Note");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.IsUserSu).HasColumnName("isUserSU");

                entity.Property(e => e.IssueId).HasColumnName("issueId");

                entity.Property(e => e.ModificationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationUser)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NoteTime).HasColumnType("datetime");

                entity.Property(e => e.TypeUser)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("typeUser");

                entity.Property(e => e.UserCreation)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.Issue)
                    .WithMany(p => p.Notes)
                    .HasForeignKey(d => d.IssueId)
                    .HasConstraintName("FK_IdIssue_Note");
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.HasKey(e => e.IdService)
                    .HasName("PK__Service__474DDE00892B54E1");

                entity.ToTable("Service");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationUser)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserCreation)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ServiceSupporter>(entity =>
            {
                entity.HasKey(e => e.IdServiceSopport)
                    .HasName("PK__Service___DEB7160119E91F63");

                entity.ToTable("Service_Supporter");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationUser)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserCreation)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdServiceNavigation)
                    .WithMany(p => p.ServiceSupporters)
                    .HasForeignKey(d => d.IdService)
                    .HasConstraintName("FK_IdService_ServiceSopport");

                entity.HasOne(d => d.IdSupporterNavigation)
                    .WithMany(p => p.ServiceSupporters)
                    .HasForeignKey(d => d.IdSupporter)
                    .HasConstraintName("FK_IdSupporter_ServiceSopport");
            });

            modelBuilder.Entity<Supervisor>(entity =>
            {
                entity.HasKey(e => e.IdSupervisor)
                    .HasName("PK__Supervis__F80D52823A2140AC");

                entity.ToTable("Supervisor");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationUser)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SecondSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserCreation)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Supporter>(entity =>
            {
                entity.HasKey(e => e.IdSupporter)
                    .HasName("PK__Supporte__5D99C8529A55CFBD");

                entity.ToTable("Supporter");

                entity.Property(e => e.AsignedAsSupervisor)
                    .HasColumnName("asignedAsSupervisor")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModificationDate).HasColumnType("datetime");

                entity.Property(e => e.ModificationUser)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SecondSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserCreation)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdSupervisorNavigation)
                    .WithMany(p => p.Supporters)
                    .HasForeignKey(d => d.IdSupervisor)
                    .HasConstraintName("FK_IdSupervisor_Supporter");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
