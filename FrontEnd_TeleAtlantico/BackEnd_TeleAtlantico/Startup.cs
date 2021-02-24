using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BackEnd_TeleAtlantico
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
          

            services.AddCors(options =>
            {
                options.AddPolicy("GetAllPolicy",
                  builder =>
                  {
                      builder.WithOrigins("https://localhost:44354", "https://localhost:44354/")
                                          .AllowAnyHeader()
                                          .AllowAnyMethod();//PUT, PATCH, GET, DELETE
                  });
            });



            services.AddCors(options =>
            {
                options.AddPolicy("GetAllPolicy",
                  builder =>
                  {
                      builder.WithOrigins("http://localhost:8080", "http://localhost:8080/api/")
                                          .AllowAnyHeader()
                                          .AllowAnyMethod();//PUT, PATCH, GET, DELETE
                  });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            {
                options.WithOrigins("https://localhost:44354");//le puse una s el el https
                options.AllowAnyHeader();
                options.AllowAnyMethod();
            });

            app.UseCors(options =>
            {
                options.WithOrigins("http://localhost:8080");
                options.AllowAnyHeader();
                options.AllowAnyMethod();
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
