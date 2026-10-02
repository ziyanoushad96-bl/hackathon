import React from 'react';
import { RiskLevel } from '../types';
import { ShieldAlert, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';

interface RiskBadgeProps {
  level?: RiskLevel;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  level = 'SAFE',
  showIcon = true,
  size = 'md',
  className = ''
}) => {
  const configs: Record<
    RiskLevel,
    { label: string; dot: string; bg: string; text: string; border: string; icon: React.ReactNode }
  > = {
    CRITICAL: {
      label: 'Critical',
      dot: 'bg-rose-500',
      bg: 'bg-rose-50',
      text: 'text-rose-700 font-semibold',
      border: 'border-rose-200',
      icon: <ShieldAlert className={size === 'sm' ? 'w-3 h-3 text-rose-600' : 'w-3.5 h-3.5 text-rose-600'} />
    },
    AT_RISK: {
      label: 'At Risk',
      dot: 'bg-orange-500',
      bg: 'bg-orange-50',
      text: 'text-orange-700 font-semibold',
      border: 'border-orange-200',
      icon: <AlertTriangle className={size === 'sm' ? 'w-3 h-3 text-orange-600' : 'w-3.5 h-3.5 text-orange-600'} />
    },
    APPROACHING: {
      label: 'Approaching',
      dot: 'bg-amber-500',
      bg: 'bg-amber-50',
      text: 'text-amber-700 font-medium',
      border: 'border-amber-200',
      icon: <Clock className={size === 'sm' ? 'w-3 h-3 text-amber-600' : 'w-3.5 h-3.5 text-amber-600'} />
    },
    SAFE: {
      label: 'Safe',
      dot: 'bg-emerald-500',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700 font-medium',
      border: 'border-emerald-200',
      icon: <ShieldCheck className={size === 'sm' ? 'w-3 h-3 text-emerald-600' : 'w-3.5 h-3.5 text-emerald-600'} />
    }
  };

  const config = configs[level] || configs.SAFE;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses[size]} ${className}`}
      title={`Risk level: ${config.label}`}
    >
      {showIcon && config.icon}
      <span>{config.label}</span>
    </span>
  );
};
