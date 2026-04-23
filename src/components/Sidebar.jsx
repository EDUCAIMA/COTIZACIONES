import { LayoutDashboard, MessageSquare, Calendar, Ticket, Utensils, Users, Settings, PlusCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard Operativo', icon: LayoutDashboard },
  { id: 'whatsapp', label: 'Consola de WhatsApp', icon: MessageSquare },
  { id: 'calendar', label: 'Calendario Canchas', icon: Calendar },
  { id: 'pool', label: 'Venta Manillas', icon: Ticket },
  { id: 'restaurant', label: 'Restaurante', icon: Utensils },
  { id: 'clients', label: 'Directorio Clientes', icon: Users },
  { id: 'infra', label: 'Gestión de infraestructura', icon: Settings },
];

export const Sidebar = ({ activeView, onViewChange }) => {
  return (
    <aside className="h-screen w-72 flex-col fixed left-0 top-0 bg-brand-purple flex p-6 gap-y-4 font-headline antialiased tracking-tight shadow-2xl z-[60]">
      <div className="flex flex-col items-center mb-10 px-4">
        <div className="w-full aspect-[3/1] relative flex items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
          <img 
            src="/logo.png" 
            alt="Encanto Logo" 
            className="max-w-full max-h-full object-contain brightness-0 invert opacity-90 transition-all duration-500 hover:scale-110" 
          />
        </div>
        <div className="w-12 h-1 bg-primary/40 rounded-full mt-4 blur-[1px]"></div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 transition-all duration-300 group rounded-xl relative",
                isActive 
                  ? "text-white font-bold bg-white/10 shadow-inner" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 w-1.5 h-6 bg-primary rounded-r-full"
                />
              )}
              <Icon 
                size={18} 
                className={cn(
                  "transition-all duration-300", 
                  isActive ? "text-primary scale-110" : "group-hover:scale-110 group-hover:text-white"
                )} 
              />
              <span className="text-[13px] font-semibold tracking-wide uppercase">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/30 hover:opacity-90">
          <PlusCircle size={20} />
          <span>Nueva Reserva</span>
        </button>
      </div>
    </aside>
  );
};
